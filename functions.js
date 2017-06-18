var ProfilePic = function (props) {
   return <img src={'https://photo.fb.com/' + props.username} />
 }
 var ProfileLink = function (props) {
   return (
     <a href={'https://www.fb.com/' + props.username}>
       {props.username}
     </a>
   )
 }
 var Avatar = function (props) {
   return (
     <div>
       <ProfilePic username={props.username} />
       <ProfileLink username={props.username} />
     </div>
   )
 }
 <Avatar username="dora.megyesi" />


//pure function:
function add (x,y) {
  return x + y
}

//pure function:
var friends = ['Ryan', 'Michael', 'Dan']
friends.slice(0, 1) // 'Ryan'
friends.slice(0, 1) // 'Ryan'
friends.slice(0, 1) // 'Ryan'

//NOT pure function:
var friends = ['Ryan', 'Michael', 'Dan']
friends.splice(0, 1) // ["Ryan"]
friends.splice(0, 1) // ["Michael"]
friends.splice(0, 1) // ["Dan"]
//each time we invoke it passing in the same arguments, we get a different result
