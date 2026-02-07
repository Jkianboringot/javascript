const body=document.body

//added text to body
// body.append('fuck') 

//adding element div with text
// const div=document.createElement('div')
// div.innerText='diving'
// body.append(div)


//render html in js, bad practice its a security concern
// const div=document.createElement('div')
// div.innerHTML='<h1>Render</h1>'
// body.append(div)


const div=document.querySelector('div')
const hi=document.getElementById('hi')//no need to use # here becuase its already targeting id  
                                        //but if its query Selector it does need #
const bye=document.getElementById('bye')

// remove 
// hi.remove()
// div.append(hi)

console.log(hi.dataset.test)//passdata from html to js
hi.dataset.new='new' //passdata from js to html
console.log(hi.dataset)


bye.classList.add('bye2')//class manipulation adding or removing
bye.classList.remove('bye')

// style manipulation
hi.style.color='red'
