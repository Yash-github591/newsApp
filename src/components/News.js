import React,{useState,useEffect} from 'react';
import axios from 'axios';
function News() {
    const [news, setNews] = useState([]);
    const [news2, setNews2] = useState([]);
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7fd19abc984a44e6bf09fe626a1fa478')
            .then(response =>{ 
            
            //  console.log(response);
             setNews(response.data.articles);
            //  console.log(news);
            });

            axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7fd19abc984a44e6bf09fe626a1fa478')
            .then(response =>{ 
            
            //  console.log(response);
             setNews2(response.data.articles);
            //  console.log(news);
            });

            
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const cards = news.map((i)=>
    <div>
    
        <div className="card " style={{width:'18rem'}}>
        <img src={i.urlToImage} className="card-img-top" alt="image"/>
            <div className="card-body">
                <h5 className="card-title">{i.author}</h5>
                <p className="card-text">{i.title}</p>
                <a href={i.url} className="btn btn-primary">Link to Page</a>
            </div>
        </div>
    </div>

    );



    const card2 = news2.map((i)=>
    <div>
    
        <div className="card " style={{width:'18rem'}}>
        <img src={i.urlToImage} className="card-img-top" alt="image"/>
            <div className="card-body">
                <h5 className="card-title">{i.author}</h5>
                <p className="card-text">{i.title}</p>
                <a href={i.url} className="btn btn-primary">Link to Page</a>
            </div>
        </div>
    </div>

    );
  return (
    <div className='container'> 
       <div className='row '>
       {cards}
       </div>
       <div className='row' style={{width:'50%'}}>
       {card2}
       </div>
       
    </div>
  )
}

export default News
