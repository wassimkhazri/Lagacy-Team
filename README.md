- [ ] edit profile : update username, profile picture, extra info , delete account.
- [ ] Like / unlike post
- [ ] user profile has only their posts
- [ ] Ability to click on a profile and view the user and their posts
  - [ ] if not friends : see only their name + send invitation
- [x] Comment on post
- [ ] Delete a comment
- [ ] LIVE CHAT
- [x] create room schema ( )
- [x] user => Array rooms
  - [x] each room object has : user1, user2, array of messages (message schema as it is now)
  - [ ] display message component: gets room by user1 (connected) + user2 (currentFriend) + loop over message array
  - [ ] once user send message, socket.io('new-message') => add message to messages array of room ref.
  - [ ] ngOnInit() recalls the room to refresh the messages.
