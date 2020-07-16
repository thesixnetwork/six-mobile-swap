const people = [
    { name: 'Lek', position: 'Father' },
    { name: 'Kan', position: 'Wife' }
]


export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(people)
        }, 3000)
    })


}