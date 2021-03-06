import { useStaticQuery, graphql } from 'gatsby';

const useChapters = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___slug, order: ASC }) {
        nodes {
          frontmatter {
            title
            slug
            chapter
            editor {
              answer
              showEditor
              language
              startingCode
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(chapter => ({
    title: chapter.frontmatter.title,
    chapter: chapter.frontmatter.chapter,
    slug: chapter.frontmatter.slug,
    excerpt: chapter.excerpt,
    editor: {
      answer: chapter.frontmatter.editor.answer,
      showEditor: chapter.frontmatter.editor.showEditor,
      language: chapter.frontmatter.editor.language,
      startingCode: chapter.frontmatter.editor.startingCode,
    },
  }));
};

export default useChapters;
