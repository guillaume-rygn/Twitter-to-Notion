const NOTION_API_TOKEN ='secret_XR9kcJnnDOI3ctOE6TM1C5hMFai2aZHpeLR23kpaeR1'
const DATABASE_ID = '324ece999c3d4491998663ee7f4d81d7';

const headers = {
    Authorization: `Bearer ${NOTION_API_TOKEN}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28'
};





chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "add") {

        const data = {
            parent: { database_id: DATABASE_ID },
            properties: {
                title: {
                    title: [
                        {
                            text: {
                                content: request.name,
                            },
                        },
                    ],
                },
                Lien: {
                    url: request.link
                },
                ProfileLink: {
                    url: request.profileLink
                },
                HandleName: {
                    rich_text: [
                        {
                            text: {
                                content: request.handleName
                            },
                        },
                    ],
                },
                Content: {
                    rich_text: [
                        {
                            text: {
                                content: request.content
                            },
                        },
                    ],
                },
                Date: {
                    date: {
                        start: new Date().toISOString().split('T')[0]
                    }
                }
            },
        };



        fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('New Page ID:', data);
                sendResponse({data: data.id})
            })
            .catch(err => console.log(err));
      return true; 
    }

    else if(request.action == "delete"){

        console.log(request.id)

        fetch(`https://api.notion.com/v1/pages/${request.id}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                'archived':true
            }),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('New Page ID:', data);
                sendResponse({data: data.id})
            })
            .catch(err => console.log(err));
      return true;
    }
  });