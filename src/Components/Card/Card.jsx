const Card =() => {
    return(
        <div className="card">
            <img
   alt="Human Image"
   src={`https://robohash.org/${2}?set=set2&size=180x180`}
  />
  <h2>{alien.name}</h2>
  <p>{alien.email.toLowerCase()}</p>

        </div>
    )
}
export default Card;