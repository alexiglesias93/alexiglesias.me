import Prismic from '@prismicio/client';
import type ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';

const ENDPOINT = 'https://alexiglesias.cdn.prismic.io/api/v2';

const PrismicClient = Prismic.client(ENDPOINT);

export default PrismicClient;

export const getAllWork = (): Promise<ApiSearchResponse> =>
  PrismicClient.query(Prismic.Predicates.at('document.type', 'work'));
