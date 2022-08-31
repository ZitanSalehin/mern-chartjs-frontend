import React from 'react'

function ProductForm() {
  return (
    <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Product List Form</h3>
    
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
    <div >
            <label for="UrunImage" class="form-label">Product Image</label>
            <input type="file" class="form-control" name="UrunImage" id="UrunImage"/>
        </div>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    <p class="copyright">Gain Solution</p>
  </form>
</div>
  )
}

export default ProductForm