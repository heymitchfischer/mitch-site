class StaticPagesController < ApplicationController
  def about
    
  end

  def portfolio
    
  end

  def contact
    
  end

  def send_message
    ContactMailer.with(params).contact.deliver_now
  end
end
