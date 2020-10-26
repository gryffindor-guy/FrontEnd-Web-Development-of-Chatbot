$(function() {
  var INDEX = 0; 
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val(); 
    if(msg.trim() == ''){
      return false;
    }
    generate_message(msg, 'self');
    var buttons = [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ];
    setTimeout(function() { 
      msg = bot_chat(msg); 
      generate_message(msg, 'user');  
    }, 1000)
    
  })
  function bot_chat(msg) {
    var text = ["Hi", "hi", "How are you", "hello", "Is anyone there?", "Hello", "Good day", "hello"];
    var good = ["good", "well", "Good", "Well", "WELL", "GOOD"];
    var replies = ["Good to hear!", "That's cool", "That's good"]
    var reply = ["Hello", "Hi there!", "How are you doing", "wass up", "Hey", "Hola", "Good to see you", "Hi, I hope all is well"];
    var result = msg;
    if (msg == "music" || msg == "Music" || msg == "MUSIC") {
      var URL = "https://www.spotify.com/in/";
      var W = window.open(URL);
      W.window.print();
      msg =`I Hope I helped you, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
      return msg;
    }
    else if (msg == "yoga" || msg == "Yoga" || msg == "YOGA") {
      var URL = "https://yogainternational.com/";
      var W = window.open(URL);
      W.window.print();
      msg =`I Hope I helped you, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
      return msg;
    }
    else if (msg == "shop" || msg == "SHOP" || msg == "Shop") {
      var URL = "https://www.amazon.in/";
      var W = window.open(URL);
      W.window.print();
      msg =`I Hope I helped you, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
      return msg;
    }
    else if (msg == "story" || msg == "Story" || msg == "STORY") {
      var URL = "https://storybird.com/";
      var W = window.open(URL);
      W.window.print();
      msg =`I Hope I helped you, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
      return msg;
    }
    else if (msg == "typing" || msg == "Typing" || msg == "TYPING") {
      var URL = "https://www.typingmaster.com/";
      var W = window.open(URL);
      W.window.print();
      msg =`I Hope I helped you, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
      return msg;
    }
    else if (msg == "stop" || msg == "STOP" || msg == "Stop") {
      msg = "I hope I helped you, Bye! Take care :)";
      return msg;
    }
    else if (text.includes(msg)) {
      let randomValue = reply[Math.floor(Math.random() * reply.length)];
      msg = `${randomValue}`;
      return `${msg} I Hope I would be useful to you in so many ways, I can do so many things, Don't you wanna give it a try, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
    }
    else if (good.includes(msg)) {
      let randomValue = replies[Math.floor(Math.random() * replies.length)];
      msg = `${randomValue}`;
      return `${msg} I Hope I would be useful to you in so many ways, I can do so many things, Don't you wanna give it a try, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
    }
    else {
      msg = `Sorry, I didn't get that, I Hope I would be useful to you in so many ways, I can do so many things, Don't you wanna give it a try, please Type any commands below:  MUSIC || YOGA || SHOP || TYPING || STORY or STOP to quit`;
      return msg;
    }
  }
  function generate_message(msg, type) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val(''); 
    }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }  
  
  function generate_button_message(msg, buttons){    
    /* Buttons should be object array 
      [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ]
    */
    INDEX++;
    var btn_obj = buttons.map(function(button) {
       return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
    }).join('');
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "          <div class=\"cm-msg-button\">";
    str += "            <ul>";   
    str += btn_obj;
    str += "            <\/ul>";
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);   
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    $("#chat-input").attr("disabled", true);
  }
  
  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })
  
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
})