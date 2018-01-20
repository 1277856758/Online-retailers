export default  {
    init (val, cls) {
        const el = this.createdElement('div', {class: cls}, [val])
        if (document.querySelector(`.${cls}`)) {
         document.querySelector(`.${cls}`).remove(document.querySelector('body'))
         document.querySelector('body').appendChild(el)
         } else {
             document.querySelector('body').appendChild(el)
         }
        return el
     },
     createdElement (type, props, children) {
         if (!_.isString(type)) {
             console.log('error type')
             return;
         }
         let el = document.createElement(type)
         if (!_.isObject(props)) {
             console.log('error props')
             return;
         } else {
             for (let i in props) {
                 el.setAttribute(i,props[i])
             }
         }
         if (children && children.length > 0) {
             children.forEach((item) => {
                 if (_.isElement(item)) {
                     el.appendChild(item)
                     return;
                 } else if (_.isString(item)) {
                     el.innerText = item
                     return;
                 } else {
                     console.log('error child element or String')
                 }
             });
         }
         return el
     }
}