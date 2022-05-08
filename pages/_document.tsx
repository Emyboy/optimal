import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(
                            <body className="template-index index-demo4">
                                <div className="page-wrapper">
                                    <App {...props} />
                                </div>
                            </body>,
                        ),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }
}

export default CustomDocument;
