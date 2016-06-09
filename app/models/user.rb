class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  # attr_reader :password

  # devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :confirmable, :omniauthable
  devise :omniauthable

  attr_accessor :email, :name, :password, :password_confirmation, :remember_me


  after_initialize :ensure_session_token

  validates :password_digest, presence: true
  validates( :password, length: { minimum: 6, allow_nil: true } )
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true

  has_many :authorizations, :dependent => :destroy
  has_many(
    :decks,
    foreign_key: :owner_id,
    class_name: "Deck"
  )

  has_many(
   :reviews,
   through: :decks,
   source: :reviews
 )

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.find_by_facebook_uid(uid)
    User.find_by(facebook_uid: uid)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
