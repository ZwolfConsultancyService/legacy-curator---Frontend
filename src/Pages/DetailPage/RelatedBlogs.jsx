// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, BookOpen, RefreshCw } from "lucide-react";

// // ============================================================
// // API
// // ============================================================

// const API_BASE = import.meta.env.VITE_API_BASE_URL;

// // ============================================================
// // SERVICE CATEGORIES
// // ============================================================

// const VALID_CATEGORIES = [
//   "photo-book",
//   "travel-photo-book",
//   "wedding-photo-book",
//   "individual-photo-book",
//   "customized-photo-book",
//   "product-catalogue-photo-book",
//   "childrens-photo-book",
//   "travel-book",
//   "legacy-book",
//   "coffee-table",
//   "memoir",
//   "vision-passion-book",
//   "business-book",
//   "devotional-book",
// ];

// // ============================================================
// // THEME
// // ============================================================

// const THEME = {
//   eggshell: "#FAF8F2",
//   porcelain: "#FFFFFF",
//   ink: "#1B2E27",
//   inkLight: "rgba(27,46,39,0.68)",
//   copper: "#A7703D",
//   gold: "#B8925A",
//   border: "rgba(27,46,39,0.12)",
// };

// // ============================================================
// // HELPERS
// // ============================================================

// // Convert:
// // "travel-photo-book" → "Travel Photo Book"
// const formatCategory = (category = "") => {
//   return category
//     .split("-")
//     .map(
//       (word) =>
//         word.charAt(0).toUpperCase() +
//         word.slice(1)
//     )
//     .join(" ");
// };

// // Get image from different possible backend structures
// const getBlogImage = (blog) => {
//   return (
//     blog.image ||
//     blog.featuredImage ||
//     blog.coverImage ||
//     blog.thumbnail ||
//     blog.imageUrl ||
//     blog.heroImage ||
//     null
//   );
// };

// // Get blog slug safely
// const getBlogSlug = (blog) => {
//   return (
//     blog.slug ||
//     blog._id ||
//     blog.id
//   );
// };

// // Normalize category into array
// const normalizeCategories = (category) => {
//   if (Array.isArray(category)) {
//     return category;
//   }

//   if (typeof category === "string" && category.trim()) {
//     return [category.trim()];
//   }

//   return [];
// };

// // ============================================================
// // BLOG CARD
// // ============================================================

// const RelatedBlogCard = ({ blog }) => {
//   const image = getBlogImage(blog);
//   const slug = getBlogSlug(blog);

//   const categories = normalizeCategories(
//     blog.category
//   );

//   return (
//     <article
//       style={{
//         background: THEME.porcelain,
//         border: `1px solid ${THEME.border}`,
//         borderRadius: 8,
//         overflow: "hidden",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         transition:
//           "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform =
//           "translateY(-5px)";

//         e.currentTarget.style.boxShadow =
//           "0 18px 45px rgba(27,46,39,0.12)";

//         e.currentTarget.style.borderColor =
//           THEME.copper;
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform =
//           "translateY(0)";

//         e.currentTarget.style.boxShadow =
//           "none";

//         e.currentTarget.style.borderColor =
//           THEME.border;
//       }}
//     >
//       {/* ====================================================
//           IMAGE
//       ===================================================== */}

//       <Link
//         to={`/blog/${slug}`}
//         style={{
//           display: "block",
//           textDecoration: "none",
//         }}
//       >
//         <div
//           style={{
//             height: 220,
//             background: THEME.eggshell,
//             overflow: "hidden",
//             position: "relative",
//           }}
//         >
//           {/* {image ? (
//             <img
//               src={image}
//               alt={
//                 blog.title ||
//                 "Related blog"
//               }
//               loading="lazy"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 display: "block",
//                 transition:
//                   "transform 0.5s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform =
//                   "scale(1.05)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform =
//                   "scale(1)";
//               }}
//             />
//           ) : (
//             <div
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background:
//                   "linear-gradient(135deg, #FAF8F2, #EEE7DA)",
//               }}
//             >
//               <BookOpen
//                 size={38}
//                 strokeWidth={1.2}
//                 color={THEME.gold}
//               />
//             </div>
//           )} */}

//           {/* IMAGE LABEL */}

//           {/* <div
//             style={{
//               position: "absolute",
//               top: 14,
//               left: 14,
//               padding: "6px 10px",
//               background:
//                 "rgba(27,46,39,0.9)",
//               color: "#fff",
//               fontFamily:
//                 "'Montserrat', sans-serif",
//               fontSize: 9,
//               fontWeight: 700,
//               letterSpacing: "0.12em",
//               textTransform: "uppercase",
//             }}
//           >
//             Related Story
//           </div> */}
//         </div>
//       </Link>

//       {/* ====================================================
//           CONTENT
//       ===================================================== */}

//       <div
//         style={{
//           padding: "24px 22px 22px",
//           display: "flex",
//           flexDirection: "column",
//           flex: 1,
//         }}
//       >
//         {/* CATEGORY */}

//         {categories.length > 0 && (
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 6,
//               marginBottom: 12,
//             }}
//           >
//             {categories
//               .slice(0, 2)
//               .map((category) => (
//                 <span
//                   key={category}
//                   style={{
//                     fontFamily:
//                       "'Montserrat', sans-serif",
//                     fontSize: 9,
//                     fontWeight: 700,
//                     letterSpacing:
//                       "0.13em",
//                     textTransform:
//                       "uppercase",
//                     color:
//                       THEME.copper,
//                   }}
//                 >
//                   {formatCategory(
//                     category
//                   )}
//                 </span>
//               ))}
//           </div>
//         )}

//         {/* TITLE */}

//         <Link
//           to={`/blog/${slug}`}
//           style={{
//             textDecoration: "none",
//             color: THEME.ink,
//           }}
//         >
//           <h3
//             style={{
//               fontFamily:
//                 "'Cormorant Garamond', serif",
//               fontSize: 24,
//               lineHeight: 1.18,
//               fontWeight: 700,
//               margin: "0 0 12px",
//             }}
//           >
//             {blog.title}
//           </h3>
//         </Link>

//         {/* EXCERPT */}

//         {blog.excerpt && (
//           <p
//             style={{
//               fontFamily:
//                 "'Montserrat', sans-serif",
//               fontSize: 13,
//               lineHeight: 1.75,
//               color: THEME.inkLight,
//               margin: "0 0 20px",
//               display:
//                 "-webkit-box",
//               WebkitLineClamp: 3,
//               WebkitBoxOrient:
//                 "vertical",
//               overflow: "hidden",
//             }}
//           >
//             {blog.excerpt}
//           </p>
//         )}

//         {/* AUTHOR */}

//         {blog.author && (
//           <div
//             style={{
//               marginTop: "auto",
//               paddingTop: 16,
//               borderTop: `1px solid ${THEME.border}`,
//               display: "flex",
//               justifyContent:
//                 "space-between",
//               alignItems: "center",
//               gap: 10,
//             }}
//           >
//             <span
//               style={{
//                 fontFamily:
//                   "'Montserrat', sans-serif",
//                 fontSize: 10.5,
//                 fontWeight: 600,
//                 color:
//                   THEME.inkLight,
//               }}
//             >
//               By {blog.author}
//             </span>

//             <Link
//               to={`/blog/${slug}`}
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 5,
//                 fontFamily:
//                   "'Montserrat', sans-serif",
//                 fontSize: 9.5,
//                 fontWeight: 700,
//                 letterSpacing:
//                   "0.12em",
//                 textTransform:
//                   "uppercase",
//                 color:
//                   THEME.copper,
//                 textDecoration: "none",
//               }}
//             >
//               Read
//               <ArrowRight size={11} />
//             </Link>
//           </div>
//         )}
//       </div>
//     </article>
//   );
// };

// // ============================================================
// // MAIN COMPONENT
// // ============================================================

// const RelatedBlogs = ({
//   category,
//   location = null,
//   limit = 3,
//   title = null,
//   subtitle = null,
// }) => {
//   const [blogs, setBlogs] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(null);

//   // ==========================================================
//   // FETCH BLOGS
//   // ==========================================================

//   useEffect(() => {
//     let cancelled = false;

//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           `${API_BASE}/blogs`
//         );

//         if (!response.ok) {
//           throw new Error(
//             "Failed to fetch blogs"
//           );
//         }

//         const result =
//           await response.json();

//         // Supports:
//         //
//         // { data: [...] }
//         // { blogs: [...] }
//         // [...]
//         //
//         const allBlogs =
//           Array.isArray(result)
//             ? result
//             : Array.isArray(
//                 result.data
//               )
//             ? result.data
//             : Array.isArray(
//                 result.blogs
//               )
//             ? result.blogs
//             : [];

//         if (cancelled) return;

//         // ====================================================
//         // CATEGORY VALIDATION
//         // ====================================================

//         if (
//           !category ||
//           !VALID_CATEGORIES.includes(
//             category
//           )
//         ) {
//           setBlogs([]);
//           return;
//         }

//         // ====================================================
//         // FILTER BY SERVICE CATEGORY
//         // ====================================================

//         const filteredBlogs =
//           allBlogs.filter(
//             (blog) => {
//               const blogCategories =
//                 normalizeCategories(
//                   blog.category
//                 );

//               return blogCategories.includes(
//                 category
//               );
//             }
//           );

//         // ====================================================
//         // REMOVE DUPLICATES
//         // ====================================================

//         const uniqueBlogs =
//           filteredBlogs.filter(
//             (blog, index, array) => {
//               const id =
//                 blog._id ||
//                 blog.id ||
//                 blog.slug;

//               return (
//                 index ===
//                 array.findIndex(
//                   (item) =>
//                     (
//                       item._id ||
//                       item.id ||
//                       item.slug
//                     ) === id
//                 )
//               );
//             }
//           );

//         // ====================================================
//         // LIMIT
//         // ====================================================

//         setBlogs(
//           uniqueBlogs.slice(
//             0,
//             limit
//           )
//         );
//       } catch (err) {
//         if (!cancelled) {
//           console.error(
//             "RelatedBlogs error:",
//             err
//           );

//           setError(
//             err.message ||
//               "Unable to load related blogs"
//           );
//         }
//       } finally {
//         if (!cancelled) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchBlogs();

//     return () => {
//       cancelled = true;
//     };
//   }, [category, limit]);

//   // ==========================================================
//   // DON'T SHOW EMPTY SECTION
//   // ==========================================================

//   if (
//     !loading &&
//     !error &&
//     blogs.length === 0
//   ) {
//     return null;
//   }

//   // ==========================================================
//   // DEFAULT TEXT
//   // ==========================================================

//   const sectionTitle =
//     title ||
//     `Stories About ${formatCategory(
//       category
//     )}`;

//   const sectionSubtitle =
//     subtitle ||
//     `Explore helpful stories, ideas and insights related to ${formatCategory(
//       category
//     )}.`;

//   // ==========================================================
//   // UI
//   // ==========================================================

//   return (
//     <section
//       style={{
//         background:
//           THEME.eggshell,
//         padding:
//           "80px 48px 88px",
//         borderTop: `1px solid ${THEME.border}`,
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1120,
//           margin: "0 auto",
//         }}
//       >
//         {/* ==================================================
//             HEADER
//         =================================================== */}

//         <div
//           style={{
//             maxWidth: 680,
//             margin:
//               "0 auto 46px",
//             textAlign: "center",
//           }}
//         >
//           <p
//             style={{
//               fontFamily:
//                 "'Montserrat', sans-serif",
//               fontSize: 9.5,
//               fontWeight: 700,
//               letterSpacing:
//                 "0.34em",
//               textTransform:
//                 "uppercase",
//               color:
//                 THEME.copper,
//               margin:
//                 "0 0 13px",
//             }}
//           >
//             From Our Journal
//           </p>

//           <h2
//             style={{
//               fontFamily:
//                 "'Cormorant Garamond', serif",
//               fontSize:
//                 "clamp(28px, 3vw, 42px)",
//               fontWeight: 700,
//               lineHeight: 1.15,
//               color:
//                 THEME.ink,
//               margin:
//                 "0 0 12px",
//             }}
//           >
//             {sectionTitle}
//           </h2>

//           <div
//             style={{
//               display: "flex",
//               justifyContent:
//                 "center",
//               alignItems:
//                 "center",
//               gap: 9,
//               margin:
//                 "0 0 18px",
//             }}
//           >
//             <span
//               style={{
//                 width: 48,
//                 height: 1,
//                 background:
//                   THEME.border,
//               }}
//             />

//             <span
//               style={{
//                 width: 5,
//                 height: 5,
//                 borderRadius:
//                   "50%",
//                 background:
//                   THEME.copper,
//               }}
//             />

//             <span
//               style={{
//                 width: 48,
//                 height: 1,
//                 background:
//                   THEME.border,
//               }}
//             />
//           </div>

//           <p
//             style={{
//               fontFamily:
//                 "'Montserrat', sans-serif",
//               fontSize: 13.5,
//               lineHeight: 1.8,
//               color:
//                 THEME.inkLight,
//               margin: 0,
//             }}
//           >
//             {sectionSubtitle}
//           </p>

//           {/* LOCATION CONTEXT */}

//           {location && (
//             <p
//               style={{
//                 fontFamily:
//                   "'Montserrat', sans-serif",
//                 fontSize: 10.5,
//                 fontWeight: 600,
//                 letterSpacing:
//                   "0.1em",
//                 textTransform:
//                   "uppercase",
//                 color:
//                   THEME.copper,
//                 margin:
//                   "16px 0 0",
//               }}
//             >
//               Helpful for readers in{" "}
//               {location}
//             </p>
//           )}
//         </div>

//         {/* ==================================================
//             LOADING
//         =================================================== */}

//         {loading && (
//           <div
//             style={{
//               minHeight: 180,
//               display: "flex",
//               alignItems:
//                 "center",
//               justifyContent:
//                 "center",
//             }}
//           >
//             <RefreshCw
//               size={25}
//               color={
//                 THEME.copper
//               }
//               className="animate-spin"
//             />
//           </div>
//         )}

//         {/* ==================================================
//             ERROR
//         =================================================== */}

//         {!loading && error && (
//           <div
//             style={{
//               textAlign: "center",
//               padding: "30px 20px",
//               color:
//                 THEME.inkLight,
//               fontFamily:
//                 "'Montserrat', sans-serif",
//               fontSize: 13,
//             }}
//           >
//             Unable to load related
//             stories.
//           </div>
//         )}

//         {/* ==================================================
//             BLOG GRID
//         =================================================== */}

//         {!loading &&
//           !error &&
//           blogs.length > 0 && (
//             <>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns:
//                     "repeat(3, minmax(0, 1fr))",
//                   gap: 22,
//                 }}
//               >
//                 {blogs.map(
//                   (blog) => (
//                     <RelatedBlogCard
//                       key={
//                         blog._id ||
//                         blog.id ||
//                         blog.slug
//                       }
//                       blog={blog}
//                     />
//                   )
//                 )}
//               </div>

//               {/* ==================================================
//                   VIEW ALL
//               =================================================== */}

//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent:
//                     "center",
//                   marginTop: 42,
//                 }}
//               >
//                 <Link
//                   to={`/blogs?category=${encodeURIComponent(
//                     category
//                   )}`}
//                   style={{
//                     display:
//                       "inline-flex",
//                     alignItems:
//                       "center",
//                     gap: 8,
//                     fontFamily:
//                       "'Montserrat', sans-serif",
//                     fontSize: 10,
//                     fontWeight: 700,
//                     letterSpacing:
//                       "0.18em",
//                     textTransform:
//                       "uppercase",
//                     color:
//                       THEME.ink,
//                     textDecoration:
//                       "none",
//                     borderBottom: `1px solid ${THEME.copper}`,
//                     paddingBottom: 5,
//                   }}
//                 >
//                   View All Related
//                   Stories
//                   <ArrowRight
//                     size={12}
//                   />
//                 </Link>
//               </div>
//             </>
//           )}
//       </div>

//       {/* ======================================================
//           RESPONSIVE
//       ======================================================= */}

//       <style>{`
//         @media (max-width: 850px) {
//           .related-blogs-grid {
//             grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
//           }
//         }

//         @media (max-width: 560px) {
//           .related-blogs-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default RelatedBlogs;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RefreshCw } from "lucide-react";

// ============================================================
// API
// ============================================================

const API_BASE = import.meta.env.VITE_API_BASE_URL;

// ============================================================
// SERVICE CATEGORIES
// ============================================================

const VALID_CATEGORIES = [
  "photo-book",
  "travel-photo-book",
  "wedding-photo-book",
  "individual-photo-book",
  "customized-photo-book",
  "product-catalogue-photo-book",
  "childrens-photo-book",
  "travel-book",
  "legacy-book",
  "coffee-table",
  "memoir",
  "vision-passion-book",
  "business-book",
  "devotional-book",
];

// ============================================================
// THEME
// ============================================================

const THEME = {
  eggshell: "#FAF8F2",
  porcelain: "#FFFFFF",
  ink: "#1B2E27",
  inkLight: "rgba(27,46,39,0.68)",
  copper: "#A7703D",
  gold: "#B8925A",
  border: "rgba(27,46,39,0.12)",
};

// ============================================================
// HELPERS
// ============================================================

const formatCategory = (category = "") => {
  return category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
};

const getBlogSlug = (blog) => {
  return blog.slug || blog._id || blog.id;
};

const normalizeCategories = (category) => {
  if (Array.isArray(category)) {
    return category;
  }

  if (typeof category === "string" && category.trim()) {
    return [category.trim()];
  }

  return [];
};

// ============================================================
// BLOG CARD
// ============================================================

const RelatedBlogCard = ({ blog }) => {
  const slug = getBlogSlug(blog);

  const categories = normalizeCategories(blog.category);

  return (
    <article
      className="related-blog-card"
      style={{
        background: THEME.porcelain,
        border: `1px solid ${THEME.border}`,
        borderRadius: 10,
        padding: "28px 26px 24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";

        e.currentTarget.style.boxShadow =
          "0 18px 45px rgba(27,46,39,0.10)";

        e.currentTarget.style.borderColor = THEME.copper;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";

        e.currentTarget.style.boxShadow = "none";

        e.currentTarget.style.borderColor = THEME.border;
      }}
    >
      {/* ====================================================
          CATEGORY
      ===================================================== */}
{/* 
      {categories.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 7,
            marginBottom: 14,
          }}
        >
          {categories.slice(0, 2).map((category) => (
            <span
              key={category}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: THEME.copper,
              }}
            >
              {formatCategory(category)}
            </span>
          ))}
        </div>
      )} */}

      {/* ====================================================
          TITLE
      ===================================================== */}

      <Link
        to={`/blog/${slug}`}
        style={{
          textDecoration: "none",
          color: THEME.ink,
        }}
      >
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 26,
            lineHeight: 1.2,
            fontWeight: 700,
            margin: "0 0 12px",
          }}
        >
          {blog.title}
        </h3>
      </Link>

      {/* ====================================================
          EXCERPT
      ===================================================== */}

      {blog.excerpt && (
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            lineHeight: 1.75,
            color: THEME.inkLight,
            margin: "0 0 24px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {blog.excerpt}
        </p>
      )}

      {/* ====================================================
          READ BUTTON
      ===================================================== */}

      <div
        style={{
          marginTop: "auto",
          paddingTop: 18,
          borderTop: `1px solid ${THEME.border}`,
        }}
      >
        <Link
          to={`/blog/${slug}`}
          className="related-read-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: THEME.ink,
            textDecoration: "none",
            transition: "color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = THEME.copper;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = THEME.ink;
          }}
        >
          Read Story
          <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================

const RelatedBlogs = ({
  category,
  location = null,
  limit = 3,
  title = null,
  subtitle = null,
}) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ==========================================================
  // FETCH BLOGS
  // ==========================================================

  useEffect(() => {
    let cancelled = false;

    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        if (
          !category ||
          !VALID_CATEGORIES.includes(category)
        ) {
          setBlogs([]);
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${API_BASE}/blogs`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const result = await response.json();

        const allBlogs = Array.isArray(result)
          ? result
          : Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.blogs)
          ? result.blogs
          : [];

        if (cancelled) return;

        // ====================================================
        // FILTER BY CATEGORY
        // ====================================================

        const filteredBlogs = allBlogs.filter((blog) => {
          const blogCategories = normalizeCategories(
            blog.category
          );

          return blogCategories.includes(category);
        });

        // ====================================================
        // REMOVE DUPLICATES
        // ====================================================

        const uniqueBlogs = filteredBlogs.filter(
          (blog, index, array) => {
            const id =
              blog._id ||
              blog.id ||
              blog.slug;

            return (
              index ===
              array.findIndex(
                (item) =>
                  (
                    item._id ||
                    item.id ||
                    item.slug
                  ) === id
              )
            );
          }
        );

        // ====================================================
        // LIMIT
        // ====================================================

        setBlogs(uniqueBlogs.slice(0, limit));
      } catch (err) {
        if (!cancelled) {
          console.error(
            "RelatedBlogs error:",
            err
          );

          setError(
            err.message ||
              "Unable to load related blogs"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchBlogs();

    return () => {
      cancelled = true;
    };
  }, [category, limit]);

  // ==========================================================
  // DON'T SHOW EMPTY SECTION
  // ==========================================================

  if (
    !loading &&
    !error &&
    blogs.length === 0
  ) {
    return null;
  }

  // ==========================================================
  // DEFAULT TEXT
  // ==========================================================

  const sectionTitle =
    title ||
    `Stories About ${formatCategory(category)}`;

  const sectionSubtitle =
    subtitle ||
    `Explore stories, ideas and insights related to ${formatCategory(
      category
    )}.`;

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <section
      style={{
        background: THEME.eggshell,
        padding: "78px 48px 84px",
        borderTop: `1px solid ${THEME.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        {/* ==================================================
            HEADER
        =================================================== */}

        <div
          style={{
            maxWidth: 680,
            margin: "0 auto 44px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: THEME.copper,
              margin: "0 0 13px",
            }}
          >
            From Our Journal
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(30px, 3vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: THEME.ink,
              margin: "0 0 14px",
            }}
          >
            {sectionTitle}
          </h2>

          {/* Decorative Line */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 9,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 48,
                height: 1,
                background: THEME.border,
              }}
            />

            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: THEME.copper,
              }}
            />

            <span
              style={{
                width: 48,
                height: 1,
                background: THEME.border,
              }}
            />
          </div>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13.5,
              lineHeight: 1.8,
              color: THEME.inkLight,
              margin: 0,
            }}
          >
            {sectionSubtitle}
          </p>

          {/* LOCATION */}

          {location && (
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.copper,
                margin: "15px 0 0",
              }}
            >
              Helpful for readers in {location}
            </p>
          )}
        </div>

        {/* ==================================================
            LOADING
        =================================================== */}

        {loading && (
          <div
            style={{
              minHeight: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RefreshCw
              size={25}
              color={THEME.copper}
              className="animate-spin"
            />
          </div>
        )}

        {/* ==================================================
            ERROR
        =================================================== */}

        {!loading && error && (
          <div
            style={{
              textAlign: "center",
              padding: "30px 20px",
              color: THEME.inkLight,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13,
            }}
          >
            Unable to load related stories.
          </div>
        )}

        {/* ==================================================
            BLOG GRID
        =================================================== */}

        {!loading &&
          !error &&
          blogs.length > 0 && (
            <>
              <div
                className="related-blogs-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(3, minmax(0, 1fr))",
                  gap: 22,
                }}
              >
                {blogs.map((blog) => (
                  <RelatedBlogCard
                    key={
                      blog._id ||
                      blog.id ||
                      blog.slug
                    }
                    blog={blog}
                  />
                ))}
              </div>

              {/* ==================================================
                  VIEW ALL
              =================================================== */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 40,
                }}
              >
                <Link
                  to={`/blogs?category=${encodeURIComponent(
                    category
                  )}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily:
                      "'Montserrat', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: THEME.ink,
                    textDecoration: "none",
                    borderBottom: `1px solid ${THEME.copper}`,
                    paddingBottom: 5,
                  }}
                >
                  View All Related Stories
                  <ArrowRight size={12} />
                </Link>
              </div>
            </>
          )}
      </div>

      {/* ======================================================
          RESPONSIVE
      ======================================================= */}

      <style>{`
        .related-blog-card h3 {
          transition: color 0.25s ease;
        }

        .related-blog-card h3:hover {
          color: #A7703D;
        }

        @media (max-width: 850px) {
          .related-blogs-grid {
            grid-template-columns: repeat(
              2,
              minmax(0, 1fr)
            ) !important;
          }
        }

        @media (max-width: 560px) {
          .related-blogs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RelatedBlogs;
