use("blog");
// db.createCollection("users");

// db.users.insertOne(
//     {
//         email: "test@test.com",
//         username: "test",
//         bio: "test",
//         image: null,
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf843"}
//     }
// )


// db.articles.insertMany([
//     {
//         slug:"how-to-train-your-dragon",
//         title:"How to train your dragon",
//         description:"Ever wonder how?",
//         body:"It takes a Jacobian",
//         tagList:[
//             "dragons",
//             "training"    
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 0,
//         author:{"$ref":"users","$id":"6503f4dbfe3f792ded9eaaab"}
//     },{
//         slug:"how-to-train-your-dragon-2",
//         title:"How to train your dragon 2",
//         description:"So toothless",
//         body:"It's a dragon",
//         tagList:[
//             "dragons",
//             "training"    
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 45,
//         author:{"$ref":"users","$id":"6503f4dbfe3f792ded9eaaab"}
//     }
// ])
// db.comments.insertMany([{
//     createdAt: new ISODate,
//     updatedAt: new ISODate,
//     body: "It takes a Jacobian",
//     author:{"$ref":"users","$id":"6503f4dbfe3f792ded9eaaab"},
//     article:{"$ref":"articles","$id":"6503f5074ac026eb5abf6e7c"}

// },{
//     createdAt: new ISODate,
//     updatedAt: new ISODate,
//     body: "Frodo the main character",
//     author: {"$ref":"users","$id":"6503f4dbfe3f792ded9eaaab"},
//     article:{"$ref":"articles","$id":"6503f5074ac026eb5abf6e7d"}
//     }
// ])

// db.subscriptions.insertMany([
//     {
//         title:"Free",
//         status:"Monthly",
//         price:0,
//         articleCountPerMonth:5
//     },{
//         title:"VIP",
//         status:"Monthly",
//         price:1,
//         articleCountPerMonth:10
//     },{
//         title:"VIP +",
//         status:"Yearly",
//         price:11,
//         articleCountPerMonth:10
//     },{
//         title:"Premium",
//         status:"Monthly",
//         price:2,
//         articleCountPerMonth:20
//     },{
//         title:"Premium +",
//         status:"Yearly",
//         price:20,
//         articleCountPerMonth:20
//     }
// ])


// db.users.insertMany([
//     {
//         email: "warrior@hotmail.com",
//         username: "warrior",
//         bio: "lorem ipsum",
//         image: "https://blog.soundcloud.com/wp-content/uploads/2011/11/kitten2.jpg",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf83f"}
//     },{
//         email: "catalog@gmail.com",
//         username: "CataLog",
//         bio: "cat as log",
//         image: "https://ih1.redbubble.net/image.2265714160.1008/st,small,507x507-pad,600x600,f8f8f8.jpg",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf840"}
//     },{
//         email: "thaljef@aol.com",
//         username: "thaljef",
//         bio: "gg",
//         image: null,
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf841"}
//     },{
//         email: "aglassis@att.net",
//         username: "aglassis",
//         bio: "Anna Ivanova is a passionate writer and a journalism expert known for her vibrant articles on culture and art, distinguished by an unconventional approach.",
//         image: "https://img.freepik.com/free-photo/stylish-confident-businesswoman-smiling_176420-19466.jpg?w=2000",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf842"}
//     },{
//         email: "scotfl@msn.com",
//         username: "scotfl",
//         bio: "Scott Fleing is an accomplished writer and expert in various fields, known for him insightful articles on diverse topics.",
//         image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&w=1000&q=80",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf843"}
//     },{
//         email: "stomv@verizon.net",
//         username: "stomv",
//         bio: "Alex Turner is a seasoned journalist and author with a knack for storytelling. With a background in investigative reporting, his articles captivate readers with their deep insights and engaging narrative style.",
//         image: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?w=2000",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf83f"}
//     },{
//         email: "raides@gmail.com",
//         username: "raides",
//         bio: "David Rodriguez is a seasoned journalist with a flair for storytelling. His incisive articles on technology and innovation have garnered widespread acclaim for their insightful perspectives.",
//         image: "https://m.timesofindia.com/photo/83890830/83890830.jpg",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf840"}
//     },{
//         email: "dogdude@msn.com",
//         username: "dogdude",
//         bio: "doge.",
//         image: "https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-1.1.0&rect=398%2C2%2C1206%2C991&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf841"}
//     },{
//         email: "vlefevre@yahoo.com",
//         username: "vlefevre",
//         bio: "Carlos Martinez is a prolific author and expert in business and finance. His analytical articles provide valuable insights for both seasoned professionals and aspiring entrepreneurs, making him a trusted voice in the industry.",
//         image: "https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf842"}
//     },{
//         email: "nicktrig@gmail.com",
//         username: "nicktrig",
//         bio: "Nick Turner is a dynamic writer specializing in science and technology. His articles blend in-depth research with accessible language, making complex topics easily understandable for a broad audience.",
//         image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww&w=1000&q=80",
//         subscription: {"$ref":"subscriptions","$id":"6503f4b69a0ca9faec5cf843"}
//     }
// ])

// db.articles.insertMany([
//     {
//         slug:"whispers-in-the-wind",
//         title:"Whispers in the Wind",
//         description:"In a small coastal town, a mysterious child discovers the power to communicate with the elements. As a sinister force threatens their community, they must harness their newfound abilities to save their home.",
//         body:"In nature's secrets, lies our strength.",
//         tagList:[
//             "whisper",
//             "wind"    
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 13,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977e8"}
//     },{
//         slug:"echoes-of-eternity",
//         title:"Echoes of Eternity",
//         description:"In a distant future, a brilliant scientist unlocks the key to time travel. When an unforeseen tragedy strikes, she embarks on a journey through centuries, seeking a way to rewrite history and reclaim lost love.",
//         body:"Time is a tapestry, woven with second chances.",
//         tagList:[
//             "echo",
//             "eternity"    
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 111,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977e9"}
//     },{
//         slug:"the-enchanted-lighthouse",
//         title:"The Enchanted Lighthouse",
//         description:"In a quaint fishing village, a young girl stumbles upon a magical lighthouse that grants her the ability to heal the wounded sea creatures. Together with her newfound aquatic friends, she sets out on a heartwarming adventure to save their beloved home from destruction.",
//         body:"In the heart of the sea, miracles await.",
//         tagList:[
//             "enchanted",
//             "lighthouse"    
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 423,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977ea"}
//     },{
//         slug:"starry-skies-and-city-lights",
//         title:"Starry Skies and City Lights",
//         description:"In a bustling metropolis, a young artist discovers a magical paintbrush that brings his creations to life. As his imaginative world collides with reality, he must learn to navigate the challenges and responsibilities that come with his newfound power.",
//         body:"Creativity knows no bounds.",
//         tagList:[
//             "sky",
//             "city",
//             "lights"    
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 231,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977eb"}
//     },{
//         slug:"whispers-of-the-forest",
//         title:"Whispers of the Forest",
//         description:"In an ancient woodland, a curious child stumbles upon a hidden world of mythical creatures. Together, they embark on a quest to save their enchanted realm from a looming darkness that threatens to consume it.",
//         body:"Believe in the magic of the unseen.",
//         tagList:[
//             "whispers",
//             "forest",
//             "woodland",
//             "magic",
//             "mythic"
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 65,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977ec"}
//     },{
//         slug:"skyward-bound",
//         title:"Skyward Bound",
//         description:"Set in a steampunk-inspired world, a group of young inventors and adventurers embark on a daring expedition to reach the legendary floating city. Along the way, they uncover secrets that challenge their understanding of science, magic, and the boundaries of their world.",
//         body:"Dreams can defy gravity.",
//         tagList:[
//             "sky",
//             "dreams"
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 212,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977ed"}
//     },{
//         slug:"whiskers-and-whimsy",
//         title:"Whiskers and Whimsy",
//         description:"In a cozy town filled with talking animals, a shy kitten teams up with a mischievous raccoon on a quest to solve a magical mystery. Together, they uncover a hidden world of enchantment and learn the true meaning of friendship.",
//         body:"In every paw, a touch of magic.",
//         tagList:[
//             "whiskers",
//             "cat",
//             "animal"
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 543,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977ee"}
//     },{
//         slug:"chronicles-of-the-celestial-guardians",
//         title:"Chronicles of the Celestial Guardians",
//         description:"In a realm between worlds, a group of unlikely heroes must unite to protect the balance of the universe from an ancient evil. Armed with unique powers, they embark on an epic journey through fantastical landscapes, facing unimaginable challenges along the way.",
//         body:"Destiny calls, heroes rise.",
//         tagList:[
//             "guardians",
//             "celestial"
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 486,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977ef"}
//     },{
//         slug:"whispers-in-the-mist",
//         title:"Whispers in the Mist",
//         description:"In a remote village nestled among fog-covered hills, a young girl discovers an ancient book that holds the key to awakening the spirits of the land. As a dark force threatens their world, she must learn to harness the power of the mist and fulfill her destiny.",
//         body:"In the heart of the mist, lies untold power.",
//         tagList:[
//             "whispers",
//             "mist"
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 5432,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977f0"}
//     },{
//         slug:"starlight-seekers",
//         title:"Starlight Seekers",
//         description:"In a futuristic world where stars have vanished, a group of determined children embark on a quest to find the mythical Starlight Stone. Along their journey, they uncover forgotten secrets and restore hope to their darkened skies.",
//         body:"In darkness, we find our brightest light.",
//         tagList:[
//             "starlight",
//             "seekers"
//         ],
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         likes: 0,
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977f1"}
//     } 
// ])

// db.comments.insertMany([
//     {
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "In nature's secrets, lies our strength.",
//         author:{"$ref":"users","$id":"6503fb4c2d4f2e556aa977e8"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a0057"}

//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "Time is a tapestry, woven with second chances.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977e9"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a0058"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "In the heart of the sea, miracles await.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977ea"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a0059"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "Creativity knows no bounds.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977eb"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a005a"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "Believe in the magic of the unseen.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977ec"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a005b"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "Dreams can defy gravity.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977ed"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a005c"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "In every paw, a touch of magic.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977ee"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a005d"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "Destiny calls, heroes rise.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977ef"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a005e"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "In the heart of the mist, lies untold power.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977f0"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a005f"}
//     },{
//         createdAt: new ISODate,
//         updatedAt: new ISODate,
//         body: "In darkness, we find our brightest light.",
//         author: {"$ref":"users","$id":"6503fb4c2d4f2e556aa977f1"},
//         article:{"$ref":"articles","$id":"6503fff2351bc1410d9a0060"}
//     }
// ])

// db.users.updateOne(
//     {email:"test@test.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +31))}
//     }
// )
// db.users.updateOne(
//     {email:"warrior@hotmail.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +31))}
//     }
// )
// db.users.updateOne(
//     {email:"catalog@gmail.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +31))}
//     }
// )
// db.users.updateOne(
//     {email:"thaljef@aol.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +365))}
//     }
// )
// db.users.updateOne(
//     {email:"aglassis@att.net"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +31))}
//     }
// )
// db.users.updateOne(
//     {email:"scotfl@msn.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +365))}
//     }
// )
// db.users.updateOne(
//     {email:"stomv@verizon.net"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +31))}
//     }
// )
// db.users.updateOne(
//     {email:"raides@gmail.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +31))}
//     }
// )
// db.users.updateOne(
//     {email:"dogdude@msn.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +365))}
//     }
// )
// db.users.updateOne(
//     {email:"vlefevre@yahoo.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +31))}
//     }
// )
// db.users.updateOne(
//     {email:"nicktrig@gmail.com"},
//     {
//         $set: {subscriptionStartDate: new ISODate, subscriptionExpirationDate:new Date(ISODate().setDate(ISODate().getDate() +365))}
//     }
// )
