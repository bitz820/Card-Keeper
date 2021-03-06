class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def show
        current_user = find_user
        # if current_user 
            render json: current_user, status: :ok
        # else
        #     render json: {error: "User not found"}, status: :not_found
        # end
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
        # This is where the user account should be created!
        
    end

    def update
        current_user = find_user
        current_user.update!(user_params)
        render json: current_user, status: :ok
    end

    def destroy 
        current_user = find_user
        current_user.destroy
        head :no_content
    end

    # Login and Logout needs to go in Sessions controller
    #secret page that you can only see if you're logged in
    private

    def find_user
        user = User.find_by!(id: session[:user_id])
    end

    def user_params
        params.permit(:password, :email, :age, :name, :credit_score)
        # password digest?
    end

end
