# gatsby-plugin-firstparty

Gatsby plugin to connect your site to [Firstparty](https://firstpartyhq.com/) analytics tool.

## Install

`npm install --save gatsby-plugin-firstparty`

## How to use

```javascript
// gatsby-config.js
module.exports = {
    ...
    plugins: [
        {
            resolve: `gatsby-plugin-firstparty`,
            options: {
                // your source URL starting with "fp."
                sourceUrl: "fp.yourdomain.com",
                // your write key for this source from the Sources page
                writeKey: "YOUR_SOURCE_WRITE_KEY",
            }
        },
        ...
    ]
}
```

## How it works

This plugin adds the Firstparty tracking script to the `<head>` of every page as documented in the Firstparty setup instructions. After downloading the script, it loads the firstparty object with your write key and domain and logs the page view.
