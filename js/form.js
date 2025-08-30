document.addEventListener('DOMContentLoaded', ()=>{

    const form= document.getElementById('contactForm');           // constant variables to grab the elements
    const  preview = document.getElementById('preview');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const nameCheck= form.name.value.trim();                     // getting the values and trimming them
        const emailCheck = form.email.value.trim();
        const messageCheck= form.message.value.trim();

        const errors= [];
        if(!nameCheck){
            errors.push('Name cannot be blank.')
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCheck)){
            errors.push('Email looks invalid');
        }
        if(!messageCheck){
            errors.push('Message cannot be blank')
        }

        if(errors.length){
            preview.innerHTML= `<p class="error">${errors.join('<br>')}</p>`;
            return;
        }
        
         // 6. Otherwise, render the preview
        preview.innerHTML = `
            <h3>Preview</h3>
            <p><strong>Name:</strong> ${nameCheck}</p>
            <p><strong>Email:</strong> ${emailCheck}</p>
            <p><strong>Message:</strong> ${messageCheck.replace(/\n/g, '<br>')}</p>
        `;
    });
});