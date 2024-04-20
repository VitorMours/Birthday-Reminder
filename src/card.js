function Card( props ){
  //FIXME: Need to fix this
  props = props.props;

  return (
  <article key ={props.id} class="card">
    <img src={props.image} alt={`${props.name} image`}></img>
    <div>
      <h3>{props.name} from {props.nationality}</h3>
      <p>{props.age} years in {props.date}</p>
    </div>
  </article>
  );
  }


export default Card;