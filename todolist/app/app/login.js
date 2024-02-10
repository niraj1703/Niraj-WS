import React from 'react'
const Login = () => {
return (

    
     <div  class=" flex items-center justify-center min-h-screen bg-gray-100">
       <div class=" px-8 py-6 mt-4 text-left bg- #a1a1aa shadow-lg  ">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
         <div class= "mt-4">
           <div> 
                 <label class="block" for="enter username ">username</label>
                  <input type="text" placeholder="Enter Username" name="uname" required
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                   </div>
               <div class="mt-4">
                 <label class="block">Password</label> 
                 <input type="password" placeholder="Enter Password" name="psw" required 
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 password-toggle-iconfas fa-eye"/>
                   </div> 
                <div  class="flex items-baseline justify-between">
                   <button class=" px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 " type="submit">Login</button>
                    <span class="psw"> <a href="#" class="text-sm text-blue-600 hover:underline">  Forgot password?</a></span>
                </div>
             </div>
           </div>
         </div>
    
  )
}

export default Login
