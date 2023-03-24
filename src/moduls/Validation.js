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
            let firstNameInput = login.find('[name="Name"]')
            let emailInput = login.find('[type="email"]')
            let lastNameInput = login.find('[name="Company-Name"]')
            let budgetInput = login.find('[name="Estimated-Budget-in"]')
            let error = login.find('input.error, select.error')
            let submit = login.find('.contact-form__button')
            let checkbox = login.find('[type="checkbox"]')

            submit.addClass('disabled')

            const checkInput = () =>
            {
                error = login.find('input.error, select.error')
                selectInput = login.find('.styledSelect.checked')

                if(emailInput.val().length < 5 || firstNameInput.val().length < 2 || lastNameInput.val().length < 2 || budgetInput.val().length < 2 || checkbox.is(':checked') == false)
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