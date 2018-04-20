class Category < ApplicationRecord
  has_many :categorizings, dependent: :destroy

  has_many :clients, through: :categorizings

  validates :name, presence: true, uniqueness: {
    case_sensitive: false
    # the case_sensitive option will make uniqueness
    # validation ignore case. For example, two records
    # with names "ARTS" and "Arts" can't co-exist.
  }
  before_validation :downcase_name

  private
  def downcase_name
    self.name.downcase!
  end
end
