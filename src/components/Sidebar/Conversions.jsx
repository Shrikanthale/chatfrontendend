// import React, { useState } from 'react';
// import Conversion from './Conversion';
// import useGetConversions from '../../Hooks/useGetConversions';

// const Conversions = ({ onSelectConversation, isDarkMode = false }) => {
//   const [selectedId, setSelectedId] = useState(null);

//   const {conversions} = useGetConversions()
//   console.log("====",conversions)


//   //   {
//   //     id: 1,
//   //     name: 'Alice Johnson',
//   //     avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
//   //     lastMessage: 'Hey! How are you doing today? 😊',
//   //     timestamp: new Date(Date.now() - 1000 * 60 * 5),
//   //     unreadCount: 2,
//   //     isOnline: true,
//   //     status: 'read'
//   //   },
 

//   const handleConversationClick = (conversation) => {
//     setSelectedId(conversation.id);
//     onSelectConversation?.(conversation);
//   };

//   return (
//     <div className="h-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
//       {conversions.map((conversation, index) => (
//         <div
//           key={conversation.id}
//           className={`animate-slide-in-up`}
//           style={{ animationDelay: `${index * 0.05}s` }}
//         >
//           <Conversion
//             conversation={conversation}
//             // isSelected={selectedId === conversation.id}
//             onClick={handleConversationClick}
//             isDarkMode={isDarkMode}
//             lastIdx = {index === conversions.length - 1}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Conversions;

import React, { useState } from 'react';
import Conversion from './Conversion';
import useGetConversions from '../../Hooks/useGetConversions';
import useConversion from '../../Zustand/useConversion';

const Conversions = ({ onSelectConversation,isDarkMode = false }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { conversions } = useGetConversions();
  const { setSelectedConversion } = useConversion();

  const handleConversationClick = (conversation) => {
    setSelectedId(conversation._id); // use _id from DB
    setSelectedConversion(conversation); // ✅ update Zustand store
  };

  return (
    <div
      className="h-full overflow-y-auto"
      style={{ maxHeight: 'calc(100vh - 200px)' }}
    >
      {conversions.map((conversation, index) => (
        <div
          key={conversation._id}
          className="animate-slide-in-up"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <Conversion
            conversation={conversation}
            isSelected={selectedId === conversation._id}
            onClick={() => handleConversationClick(conversation)}
            isDarkMode={isDarkMode}
            lastIdx={index === conversions.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default Conversions;
