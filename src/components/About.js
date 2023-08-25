import React from 'react'

export default function about() {

    const Style = {
      fontSize: 16,
      fontFamily: 'Times New Roman',
      }
  
    return (
      <div >
              <h1 className='text-center'>About Us</h1>
              <div className='container box text-center my-5'>
                  <h2>Welcome to TextUtils – Your Ultimate Text Manipulation Hub!</h2>
  <p className='about my-3' style={Style}>
  Are you tired of dealing with text that's all over the place? Look no further! TextUtils is here to make your life easier. Our user-friendly website lets you take control of your text with just a few clicks. <br />
  
  Imagine being able to transform your text into UPPERCASE to make it stand out, or into lowercase for a more subtle touch. Got messy, cluttered text? No worries! Our "Clear Text" feature will give you a clean slate to work with. <br />
  
  But that's not all – ever struggled with extra spaces causing your text to look weird? We've got you covered! Use our "Remove Extra Spaces" tool to effortlessly tidy up your text and make it look polished. <br />
  
  Our website features a simple and intuitive interface. Just type or paste your text into the large textarea section, and then choose the manipulation you want. With TextUtils, you're in command. <br />
  
  Say goodbye to text troubles and hello to seamless text manipulation. Experience the power of simplicity with TextUtils today! <br />
  </p>
              </div>
      
           
       </div>
  )
}
