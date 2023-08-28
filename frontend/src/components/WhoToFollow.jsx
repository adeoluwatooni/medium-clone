
import '../styles/WhoToFollow.css'

import authorDP from "../assets/images/authorDP.jpeg"


const WhoToFollow = () => {

  const Accounts = [
    {
      name :'Mark Randolph',
      bio : 'Random Hobbies, Realtor, Investor, Gym Enthusiast...'
    },
    {
      name :'Alex Mathers',
      bio : 'Developer who loves to write about Humor, JavaScript,...'
    },
    {
      name :'Brian Keyes',
      bio : 'Writing about productivity 🚀, personal development...'
    }
  ]
  
  return (
  
    <div className="whoToFollowDiv">
      <h4>
        Who to follow
      </h4>

      {Accounts.map((account) => {
        return (
          <div className="accountDetails">
            <a className="accountphoto-link" href="google.com">
              <div className="accountInnerDiv">
                <div className="account-photo">
                  <img src={authorDP} alt="display pic" />
                </div>
                <div className="aboutAccount">
                  <h4>
                    {account.name}
                  </h4>
                  <p>
                    {account.bio}
                  </p>
                </div>
              </div>
            </a>
            <button className="followButton">
              Follow
            </button>
          </div>
        )
      })}
      <div className="moreAccountSuggestionsDiv">
        <a href="google.com" className="moreAccountSuggestions">
          See more suggestions
        </a>
      </div>
      
    </div>
  )
}

export default WhoToFollow;


      // <div className="accountsDiv">
      //   {Accounts.map((account) => {
      //     return (
      //       <div className="accountDetails">
      //         <a href="google.com" className="account-link">
      //           <div className="accountLinkDiv">
      //             <div className="account-photo">
      //               <img src={authorDP} alt="display pic" />
      //             </div>
      //             <div className="aboutAccount">
      //               <h4>
      //                 {account.name}
      //               </h4>
      //               <p>
      //                 {account.bio}
      //               </p>
      //             </div>
      //           </div>
      //         </a>
      //         <button className="followButton">
      //           Follow
      //         </button>
      //       </div>
      //     )
      //   })}
      // </div>