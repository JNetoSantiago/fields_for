class Article < ApplicationRecord
    has_many :collaborations
    has_many :authors, through: :collaborations

    accepts_nested_attributes_for :collaborations, allow_destroy: true
end
