import { UserButton } from "@clerk/clerk-react";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { useStreamChat } from "../hooks/useStreamChat";
import PageLoader from "../components/PageLoader";
import { useEffect } from "react";
import "../styles/stream-chat-theme.css";
import {
  Chat,
  Channel,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";


import { PlusIcon } from "lucide-react";
import CreateChannelModal from "../components/CreateChannelModal";

const HomePage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { chatClient, error, isLoading } = useStreamChat();
useEffect(() => {
    if (chatClient) {
      const channelId = searchParams.get("channel");
      if (channelId) {
        const channel = chatClient.channel("messaging", channelId);
        setActiveChannel(channel);
      }
    }
  }, [chatClient, searchParams]);

  if (error) return <p>Soething went wrong...</p>;
  if (isLoading || !chatClient) return <PageLoader />;

  return (
    <div className="chat-wrapper">
      <Chat client={chatClient}>
        <div className="chat-container">
          <div className="str-chat__channel-list">
            <div className="team-channel-list">
              <div className="team-channel-list__header gap-4">
                <div className="brand-container">
                  <img src="/logo.png" alt="Logo" className="brand-logo" />
                  <span className="brand-name">Shrey</span>
                </div>
                <div className="user-button-wrapper">
                  <UserButton />
                </div>
              </div>
              <div className="team-channel-list__header gap-4"></div>
              <div className="team-channel-list_content">
                <div className="create-channel-section"></div>
                <button onClick={() => setIsCreateModalOpen(true)} className="create-channel-btn">
                  <PlusIcon className="size-4" />
                  <span>Create Channel</span>
                </button>
              </div>
            </div>
          </div>


          <div className="chat-main">
            <Channel channel={activeChannel}>
            <Window>
              {/* <CustomCHannelHeader/> */}
              <MessageList />
            <MessageInput/>
            </Window>
              <Thread />
              </Channel>
          </div>
        </div>
        {isCreateModalOpen && (
          <CreateChannelModal isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
          />
        )}
      </Chat>
    </div>
  );
};

export default HomePage;
