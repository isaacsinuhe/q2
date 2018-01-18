document.addEventListener('DOMContentLoaded', () => {

    HTMLDivElement.prototype.accordion = function () {
        const element = this
        const children = [...element.children]

        element.classList.add('accordion')
        children.forEach((child, index) => {
            if ((index % 2)) {
                child.classList.add('content')
            } else {
                child.classList.add('header')                
                child.addEventListener('click', () => {
                    try {
                        children[index + 1].classList.toggle('hide')
                    } catch(e) {
                        throw 'specify children as pair elements'
                    }

                })
            }
        })    
    }
    const element = document.getElementById('accordion')

    element.accordion()
})