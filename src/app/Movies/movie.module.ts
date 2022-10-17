export interface movieCreationDTO{
    
    name: string,
    year: number,
    genre: string,
    poster_link: any,
    teaser_link: any,
    description: string,
    director_id: number,
    added_date_time: any,
}

export interface movieDTO{

    id: number,
    name: string,
    year: number,
    genre: string,
    poster_link: any,
    teaser_link: any,
    description: string,
    director_id: number,
    added_date_time: any,
}

export interface directorDTO{
    id: number,
    username: any,
    password: any,
    firstname: string,
    secondname: string,
    email: any,
    phonenumber: any,
    address_no: any,
    first_address_line: any,
    second_address_line: any,
    city: string
}

export interface ratingDTO{

    id: number,
    mark: number,
    description: string,
    movie_id: number,
    member_id: number,
    added_date_time: any,
}

export interface totalRatingDTO{

    total_rating: any,
}

export interface favouriteDTO{

    id: number;
    member_id: number;
    movie_id: number;
    added_date_time_fav: any;
}

export interface favouriteCreationDTO{
    
    member_id: number;
    movie_id: number;
    added_date_time_fav: any;
}