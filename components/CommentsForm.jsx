import React, { useState, useEffect,useRef } from 'react';
import { submitComment } from '../services';


const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEL=useRef();
  const nameEL=useRef();
  const emailEL=useRef();
  const storeDataEL=useRef();
  useEffect(() => {
      nameEL.current.value= window.localStorage.getItem('name');
      emailEL.current.value= window.localStorage.getItem('email');
  }, []);



  const handleCommentSubmission = () => {
    setError(false);
    const {value:comment}=commentEL.current;
    const {value:name}=nameEL.current;
    const {value:email}=emailEL.current;
    const {checked:storeData}=storeDataEL.current;
    if(!comment || !name || !email){
      setError(true);
      return;
    }
    const commentObj = {name, email, comment, slug};
    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name',name);
      window.localStorage.removeItem('email',name);
    }
    submitComment(commentObj)
    .then((res) => {
      
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      });



    }



  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Laissez un commentaire</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
                 ref={commentEL}
                 className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
                 name="comment" placeholder="Commentaire" 
        />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
        <input 
               type="text" 
               ref={nameEL} 
               className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
               placeholder="Nom" 
               name="name" 
          />
        <input 
               type="text" 
               ref={emailEL} 
               className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
               placeholder="Email" 
               name="email" 
          />

        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
           <div>
                <input ref={storeDataEL} type="checkbox" id="storeData" name="storeData" value="true" />
                <label className="text-gray-500 cursor-pointer" htmlFor="storeData">  Enregistrer mon nom et mon e-mail dans le navigateur pour mon prochain commentaire.</label>
           </div>
        </div>
        {error && <p className="text-xs text-red-500"> veuillez renseigner les champs obligatoires.</p>}
        <div className="mt-8">
                 <button type="button" onClick={handleCommentSubmission} className="transition duration-500 ease hover:bg-pink-600 inline-block bg-indigo-900  text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                  Soumettre le commentaire
                  </button>
                  {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
                  <div >
                  </div>

                  
        </div>
    </div>
  )
}

export default CommentsForm