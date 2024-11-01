export type AdsResponse = {
  hits: Ad[];
  total: AdsPagination;
};

export type Ad = {
  id: string;
  external_id: string;
  headline: string;
  logo_url: string;
  brief: string;
  description: {
    text: string;
    text_formatted: string;
  };
  publication_date: string;
  employer: {
    name: string;
  };
  workplace_address: {
    municipality: string;
    region: string;
  };
  salary_type: {
    label: string;
  };
  occupation: JobTechTaxonomyItem;
  occupation_group: JobTechTaxonomyItem;
  occupation_field: JobTechTaxonomyItem;
};

//TODO: Map all JobTechTaxonomyItems
export type JobTechTaxonomyItem = {
  concept_id: string;
  label: string;
  legacy_ams_taxonomy_id: string;
};

export type JobTaxonomyResponse = {
  occupation: JobTechTaxonomyItem;
  occupation_group: JobTechTaxonomyItem;
  occupation_field: JobTechTaxonomyItem;
}[];

export type AdsPagination = {
  total: TotalAds;
};

export type TotalAds = {
  value: number;
};

export type WorkplaceAddress = {
  municipality: string;
  region: string;
};
