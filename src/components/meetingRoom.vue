<template>
  <div class="meeting-room center">
    
    <a id="meetingid" href="#"></a>
    <h1 id="dispName"></h1>
    <div id="joinMsg"></div>
    <div id="container" class="container-jitsi" style="display: none">
      <div id="toolbox" class="toolbox center" style="display: none">
        <button id="btnHangup" @click="hangup" class="disconnect-btn">
          <font-awesome-icon :icon="disconnect" />
        </button>
        <button id="btnCustomMic" @click="toggleAudio">
          <font-awesome-icon :icon="mute" class="meet-button none-buttons" id="mute" />
          <font-awesome-icon :icon="unmute" class="meet-button" id="unmute" />
        </button>
        <button id="btnCustomCamera" @click="toggleVideo">
          <font-awesome-icon
            :icon="video_open"
            class="meet-button none-buttons"
            id="video_open"
          />
          <font-awesome-icon
            :icon="video_close"
            class="meet-button"
            id="video_close"
          />
        </button>
        <button id="btnCustomTileView" @click="toggleTileView">
         
            <font-awesome-icon
            :icon="toggleTileView"
            class="meet-button"
            
          />
        </button>
        <button id="btnScreenShareCustom" @click="toggleShareScreen">
              <font-awesome-icon
            :icon="screen"
            class="meet-button "
            id="screen"
          />
          <font-awesome-icon
            :icon="unscreen"
            class="meet-button none-buttons"
            id="unscreen"
          />
        </button>
      </div>
      <div id="jitsi-meet-conf-container"></div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faMicrophone,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash,
  faThLarge,
  faDesktop,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "meetingRoom",
  data() {
    return {
      apiObj: null,
      disconnect: faPhone,
      mute: faMicrophone,
      unmute: faMicrophoneSlash,
      video_open: faVideo,
      video_close: faVideoSlash,
      toggleTileView:faThLarge,
      screen:faDesktop,
      unscreen:faMinusSquare
    
    };
  },
  components: {
    FontAwesomeIcon,
  },
  mounted() {
    this.entry();
  },
  methods: {
    hangup() {
      this.apiObj.executeCommand("hangup");
    },
    toggleAudio() {
      this.apiObj.executeCommand("toggleAudio");
    },
    toggleVideo() {
      this.apiObj.executeCommand("toggleVideo");
    },
    toggleTileView() {
      this.apiObj.executeCommand("toggleTileView");
    },
    toggleShareScreen() {
      this.apiObj.executeCommand("toggleShareScreen");
    },
   
    startmeet(meeting_id, dispNme) {
      console.log("startmeete girdi");

      const domain = "meet.jit.si";

      const options = {
        roomName: meeting_id,
        width: "100%",
        height: "100%",
        parentNode: document.querySelector("#jitsi-meet-conf-container"),
        DEFAULT_REMOTE_DISPLAY_NAME: "New User",
        userInfo: {
          displayName: dispNme,
        },
        configOverwrite: {
          doNotStoreRoom: true,
          startVideoMuted: 0,
          startWithVideoMuted: true,
          startWithAudioMuted: true,
          enableWelcomePage: false,
          prejoinPageEnabled: false,
          disableRemoteMute: true,
          remoteVideoMenu: {
            disableKick: true,
          },
        },
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          DEFAULT_REMOTE_DISPLAY_NAME: "New User",
          TOOLBAR_BUTTONS: [],
        },
        onload: function () {
          //alert('loaded');
          $("#joinMsg").hide();
          $("#container").show();
          $("#toolbox").show();
        },
      };
      this.apiObj = new JitsiMeetExternalAPI(domain, options);

      let buttons = document.querySelectorAll("button");

      buttons.forEach((element) => {
        element.classList.add("buttons-basics");
      });

      this.apiObj.addEventListeners({
        buttonChange: function(id) {
            $(id).css("background", "white");
        console.log("nura girirsen?");
        },
        
        readyToClose: function () {
          //alert('going to close');
          $("#jitsi-meet-conf-container").empty();
          $("#toolbox").hide();
          $("#container").hide();
          $("#joinMsg").show().text("Meeting Ended");
        },
        audioMuteStatusChanged: function (data) {
          if (data.muted) {
            $("#mute").hide();
            $("#unmute").show();
           $("#btnCustomMic").css("background", "rgba(0, 0, 0, 0.151)")
           $("#unmute").css("color", "white")


          } else {
            $("#mute").show();
            $("#unmute").hide();
           $("#btnCustomMic").css("background", "white")
           $("#mute").css("color", "black")
          }
        },
        videoMuteStatusChanged: function (data) {
          if (data.muted) {
            $("#video_open").hide();
            $("#video_close").show();
             $("#btnCustomCamera").css("background", "rgba(0, 0, 0, 0.151)")
             $("#video_close").css("color", "white")
          } else {
            $("#video_open").show();
            $("#video_close").hide();
             $("#btnCustomCamera").css("background", "white")
             $("#video_open").css("color", "black")

          }
        },
        tileViewChanged: function (data) {},
        screenSharingStatusChanged: function (data) {
          if (data.on) {
          $("#screen").hide();
            $("#unscreen").show();
             $("#btnScreenShareCustom").css("background", "white" )
             $("#unscreen").css("color", "black")
          } else {
              $("#screen").show();
            $("#unscreen").hide();
             $("#btnScreenShareCustom").css("background", "rgba(0, 0, 0, 0.151)")
             $("#unscreen").css("color", "white")

          }
        },
        participantJoined: function (data) {
          console.log("participantJoined", data);
        },
        participantLeft: function (data) {
          console.log("participantLeft", data);
        },
      });

      this.apiObj.executeCommand("subject", "New Room 2");
    },
    entry() {
      console.log(this.$route.params);
      var meeting_id = this.$route.params.id;

      if (!meeting_id) {
        alert("meeting id is missing");
        return;
      }
      var dispNme = window.prompt("Enter your nick!");
      if (!dispNme) {
        dispNme = "New User";
      }

      let disp_name = document.querySelector("#dispName");

      let joinmsg = document.querySelector("#joinMsg");
      joinmsg.textContent = "Joining";
      console.log(meeting_id);
      console.log(disp_name);

      this.startmeet(meeting_id, dispNme);
    },
  },
};
</script>

<style scoped>
.center{
     display: flex;
  justify-content: center;
  align-items: center;
}
.meeting-room{
    
}
.buttons-basics {
  width: 50px;
  height: 50px;
  border-radius: 50%;
    background: rgba(0, 0, 0, 0.151);

  border: none;
  outline: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.none-buttons {
  display: none;
}
.unclicked-button{
    
    }
.clicked-button{
    background:white;
    color: black;
    }
.meet-button {
  position: absolute;
  font-size: 20px;
  color: white;
}

.container-jitsi {
  position: relative;
  width: 800px;
  height:600px;
  border:none !important;
}
#jitsi-meet-conf-container {
  width: 100%;
  height: 100%;
}
.toolbox {
  position: absolute;
  bottom: 20px;
  border: none !important;
  width: 100%;
  height: 50px;
}
.toolbox button{
    margin-right: 20px;
}
.disconnect-btn {
  transform: rotate(224deg);
  background: #e71b24;
  color: white;
}
</style>
