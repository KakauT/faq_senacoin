import React, { useEffect, useRef } from 'react'
import { verificaSessao } from 'auth/login/verificaSessao'
import { useNavigate } from 'react-router-dom'
import './faqSenacoinStyle.css'
import { NavLink, Outlet } from 'react-router-dom'

    // <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    // <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />



const faqSenacoin = () => {
  const effectOnce = useRef(true)
  const navigate = useNavigate()

  useEffect(() => {
    if(effectOnce.current) {
      if(!verificaSessao()) {
        navigate("/Login", {replace: true})
      }
  
      return () => effectOnce.current = false
    }
  }, [navigate])

    return(
        <section>
  <h1 className="title-f">FAQ's</h1>
  <div className=" faq ">
    <div className="sanfonafaq ">
      <button className="btnfaq ">
        O que é o clube Senacoin?
        <i className="fa-solid fa-chevron-down icon " /> 
      </button>
      <div className="respostafaq ">
        <p>
          Start With An Online Course.An online tutorial is probably the best way to learn JavaScript.If you're serious about learning fast, efficiently and without missing any i mportant information, then you should consider enrolling in an online course.
        </p>
      </div>
      <button className="btnfaq ">
        Como funciona o clube Senacoin?
        <i className="fa-solid fa-chevron-down icon " /> 
      </button>
      <div className="respostafaq ">
        <p>
          I suggest taking a look at Typescript and learning some popular frontend framework (Angular, React, Vue). If you are interested in backend, take a look at Node. js.
        </p>
      </div>
      <button className="btnfaq ">
        Como ganhar pontos?
        <i className="fa-solid fa-chevron-down icon " /> 
      </button>
      <div className="respostafaq ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam ea odit voluptate culpa quas explicabo.
        </p>
      </div>
      <button className="btnfaq ">
        Como usar os pontos?
        <i className="fa-solid fa-chevron-down icon " /> 
      </button>
      <div className="respostafaq ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis pariatur a maiores minus tempore magni nam beatae dolores omnis.
        </p>
      </div>
    </div>
  </div>
</section>

    )

}

export default faqSenacoin