function deleteEvent() {
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')
    
    axios.delete('/events/delete/'+ id)
    .then( (res)=> {
        console.log(res.data)
        alert('event was deleted')
        window.location.href = '/events'
    })

    .catch( (err)=> {

        console.log(err)
    })

}