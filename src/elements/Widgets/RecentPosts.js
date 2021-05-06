import React from 'react'

function RecentPosts(){

    return(
        <>
            <div className="widget">
                <h5 className="sub-title">Recent Posts</h5>

                <div className="recent-post">
                    <h4><a href = "/archive-1">The Oracle Problem</a></h4>
                    <p className="recent-date">12 January</p>
                </div>

            </div>
        </>
    )

}

export default RecentPosts