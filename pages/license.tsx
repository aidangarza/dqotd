import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import { SITE_NAME, SITE_SHORTURL } from '../lib/constants'

const Comment = ({ text }: { text: string }) => (
  <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />
)

export default function License() {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} | License`}</title>
      </Head>
      <Container fullScreen>
        <Header title="License" />

        <a
          rel="license"
          href="https://creativecommons.org/licenses/by-nc/2.5/"
          className="mb-6"
        >
          <img
            alt="Creative Commons License"
            src="https://creativecommons.org/images/public/somerights20.png"
          />
        </a>

        <article className="text-justify space-y-6 max-w-xl">
          <p className="text-center">
            This work is licensed under a<br />
            <a
              rel="license"
              href="https://creativecommons.org/licenses/by-nc/2.5/"
              className="underline"
            >
              Creative Commons Attribution-NonCommercial 2.5 License
            </a>
            .
          </p>

          <Comment
            text={`<rdf:RDF xmlns="https://web.resource.org/cc/"
              xmlns:dc="https://purl.org/dc/elements/1.1/"
              xmlns:dcterms="https://purl.org/dc/terms/"
              xmlns:rdf="https://www.w3.org/1999/02/22-rdf-syntax-ns#">
          <Work rdf:about="">
             <dc:creator>Randall Munroe</dc:creator>
             <dcterms:rightsHolder>Randall Munroe</dcterms:rightsHolder>
             <dc:type rdf:resource="https://purl.org/dc/dcmitype/StillImage" />
             <dc:source rdf:resource="https://www.xkcd.com/"/>
             <license rdf:resource="https://creativecommons.org/licenses/by-nc/2.5/" />
          </Work>
          
          <License rdf:about="https://creativecommons.org/licenses/by-nc/2.5/">
             <permits rdf:resource="https://web.resource.org/cc/Reproduction" />
             <permits rdf:resource="https://web.resource.org/cc/Distribution" />
             <requires rdf:resource="https://web.resource.org/cc/Notice" />
             <requires rdf:resource="https://web.resource.org/cc/Attribution" />
             <prohibits rdf:resource="https://web.resource.org/cc/CommercialUse" />
             <permits rdf:resource="https://web.resource.org/cc/DerivativeWorks" />
          </License>
          
          </rdf:RDF>`}
          />
          <p>
            This means that you are <b>free</b> to copy and reuse any of my
            images (noncommercially) as long as you tell people where they're
            from.
          </p>
          <p>
            That is, you don't need my permission to post these images on your
            website (and hotlinking with &lt;img&gt; is fine); just include a
            link back to this page. You can use them freely (with some kind of
            link) in not-for-profit publications, and I'm also okay with people
            reprinting occasional images (with clear attribution) in
            publications like books, blogs, newsletters, and presentations. If
            you're not sure whether your use is noncommercial, feel free to ask
            (if you're not sure, it's probably okay).
          </p>
        </article>
      </Container>
    </Layout>
  )
}
