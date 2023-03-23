import "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"
import jqueryValidate from 'jquery-validation/dist/jquery.validate.js'

export default class Validation 
{
    constructor()
    {

        $('form').each(function()
        {
            let self = $(this)
            $(self).validate(
            {
                rules: 
                {
                    name: { required: true, minlength: 2 }
                }
            })
        })

        const validateForm = (login) =>
        {
            let input = login.find('input')
            let emailInput = login.find('[type="email"]')
            let firstNameInput = login.find('[name="firstname"]')
            let lastNameInput = login.find('[name="lastname"]')
            let UrlInput = login.find('[name="url"]')
            let error = login.find('input.error, select.error')
            let submit = login.find('.form__submit--parent')
            let checkbox = login.find('[type="checkbox"]')
            let checkboxParent = login.find('.login__checkbox---parent')
            let selectInput = login.find('.styledSelect.checked')
            let selectOptions = login.find('.styledParent').find('li')

            submit.addClass('disabled')

            const checkInput = () =>
            {
                error = login.find('input.error, select.error')
                selectInput = login.find('.styledSelect.checked')

                if(emailInput.val().length < 5 || firstNameInput.val().length < 2 || lastNameInput.val().length < 2 || UrlInput.val().length < 4 ||  error.length > 0 || checkbox.is(':checked') == false || selectInput.length == 0)
                {
                    submit.addClass('disabled')
                } else
                {
                    submit.removeClass('disabled')
                }

                
            }

            input.on('keyup', () => checkInput())
            checkboxParent.on('click', () => checkInput())
            selectOptions.on('click', () => checkInput())
        }
    }
}