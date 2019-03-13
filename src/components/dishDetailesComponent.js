import React  from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle,Media} from 'reactstrap';




    
  function  RenderDish({dish}) {
        return(
          <Card dish={dish}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      }
    
    function RenderComments({comments}) {
        const renderedComments = comments.map((comment) =>
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>—{comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        );
    
        if (comments != null) {
          return renderedComments;
        } else {
          return(
            <div></div>
          );
        }
      }
    const Dish = (props)=>{
    

        if(props.dish!=null){
            return(
               <div className='container'>
                <div className="row">
                 
                   <div className="col-12 col-md-5 m-1 ">
                    <RenderDish dish={props.dish}/>
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    <RenderComments comments={props.dish.comments}/>
                   </ul>
                  </div>
                  </div>
               </div>
               
        
               
            );
        }else{
            return(<div>dd</div>);
}
    };

export default Dish;