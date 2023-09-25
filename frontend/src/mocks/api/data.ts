export let multiple_abstract_articles_store = {
    page: 1,
    total_pages: 1,
    articles : [
        {
            'id': 1,
            'title': 'First article title',
            'abstract': 'First article abstract text',
            'tags': [
                {
                    name: 'test_tag_1',
                    background_color: '#123456',
                    text_color: '#000000'
                },
                {
                    name: 'test_tag_2',
                    background_color: '#124356',
                    text_color: '#000000'
                },
                {
                    name: 'test_tag_3',
                    background_color: '#123546',
                    text_color: '#000000'
                },

            ]
        },
        {
            'id': 2,
            'title': 'Second article title',
            'abstract': 'Second article abstract text',
            'tags': [
                {
                    name: 'test_tag_1',
                    background_color: '#123456',
                    text_color: '#000000'
                },
                {
                    name: 'test_tag_2',
                    background_color: '#124356',
                    text_color: '#000000'
                },
                {
                    name: 'test_tag_3',
                    background_color: '#123546',
                    text_color: '#000000'
                },

            ]
        },
        {
            'id': 1,
            'title': 'Third article title',
            'abstract': 'Third article abstract text',
            'tags': [
                {
                    name: 'test_tag_1',
                    background_color: '#123456',
                    text_color: '#000000'
                },
                {
                    name: 'test_tag_2',
                    background_color: '#124356',
                    text_color: '#000000'
                },
                {
                    name: 'test_tag_3',
                    background_color: '#123546',
                    text_color: '#000000'
                },

            ]
        }
    ]
}

export let single_full_article_store = {
	'title': 'My article title',
	'content': '<div>My article content</div>',
	'header_image': 'http://myimage.com',
	'user': 'admin',
	'created_at': Date.now(),
	'updated_at': Date.now(),
}