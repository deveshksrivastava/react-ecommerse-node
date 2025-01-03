import React from 'react'

function PageNotFound()
{
    return (
            <div class="ps-404 bg--cover" data-background="images/background/404.jpg">
            <div class="ps-404__content">
                <h1>404</h1>
                <h3>Page not found</h3>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p><a class="ps-btn" href="/">Back to home<i className="ps-icon-next"></i></a>
            </div>
            </div>
    )
}
export default PageNotFound;