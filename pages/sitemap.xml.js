import axios from "axios";

function generateSiteMap(blog) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->

     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}</loc>
     </url>

     <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/about</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/offerings</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/certification</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/testimonials</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/blog</loc>
    </url>
    
     ${blog
       .map(({ slug }) => {
         return `
      <url>
          <loc>${`${process.env.NEXT_PUBLIC_URL}/blog/${slug}`}</loc>
      </url>
    `;
       })
       .join("")}

    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/Faqs</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/career</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/contact-us</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/terms-conditions</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/privacy-policy</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/cancellation-policy</loc>
    </url>
    <url>
       <loc>${process.env.NEXT_PUBLIC_URL}/fees-schedule</loc>
    </url>



   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const req = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_Base_URLa}/enroll/blog`
  );
  const blog = await req.data;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blog);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
