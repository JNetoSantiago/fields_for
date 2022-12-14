class Collaboration < ApplicationRecord
  belongs_to :user
  belongs_to :article

  accepts_nested_attributes_for :user, allow_destroy: true
end
