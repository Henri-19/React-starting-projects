import './Cards.css';
export default function Cards({name, children}){
    return(
        <article className="card">
        <h2>{name}</h2>
        {children}
        </article>
        );
}