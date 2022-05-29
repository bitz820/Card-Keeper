class CreditCardSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :benefits, :annual_fee, :welcome_bonus, :apr, :img_url

  has_many :favorite_cards
end
