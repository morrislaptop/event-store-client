// Event Store TCP Commands
var Commands = {
	HeartbeatRequest:                  0x01,
	HeartbeatResponse:                 0x02,

	Ping:                              0x03,
	Pong:                              0x04,

	// ...

    WriteEvents:                       0x82,
    WriteEventsCompleted:              0x83,

    TransactionStart:                  0x84,
    TransactionStartCompleted:         0x85,
    TransactionWrite:                  0x86,
    TransactionWriteCompleted:         0x87,
    TransactionCommit:                 0x88,
    TransactionCommitCompleted:        0x89,

    DeleteStream:                      0x8A,
    DeleteStreamCompleted:             0x8B,

    // ...

	Read:                              0xB0,
    ReadEventCompleted:                0xB1,
    ReadStreamEventsForward:           0xB2,
    ReadStreamEventsForwardCompleted:  0xB3,
    ReadStreamEventsBackward:          0xB4,
    ReadStreamEventsBackwardCompleted: 0xB5,
    ReadAllEventsForward:              0xB6,
    ReadAllEventsForwardCompleted:     0xB7,
    ReadAllEventsBackward:             0xB8,
    ReadAllEventsBackwardCompleted:    0xB9,

	SubscribeToStream:                 0xC0,
    SubscriptionConfirmation:          0xC1,
    StreamEventAppeared:               0xC2,
    UnsubscribeFromStream:             0xC3,
    SubscriptionDropped:               0xC4,

    // ...
    ConnectToPersistentSubscription: 0xC5,
    PersistentSubscriptionConfirmation: 0xC6,
    PersistentSubscriptionStreamEventAppeared: 0xC7,
    CreatePersistentSubscription: 0xC8,
    CreatePersistentSubscriptionCompleted: 0xC9,
    DeletePersistentSubscription: 0xCA,
    DeletePersistentSubscriptionCompleted: 0xCB,
    PersistentSubscriptionAckEvents: 0xCC,
    PersistentSubscriptionNakEvents: 0xCD,
    UpdatePersistentSubscription: 0xCE,
    UpdatePersistentSubscriptionCompleted: 0xCF,

    // ...
    BadRequest:                        0xF0,
    NotHandled:                        0xF1,
    Authenticate:                      0xF2,
    Authenticated:                     0xF3,
    NotAuthenticated:                  0xF4,

    /***
     * Returns a nice name for a TCP Command ID
     */
    getCommandName: function(command) {
        for(var key in Commands) {
            if (Commands.hasOwnProperty(key)) {
                if (Commands[key] == command) {
                    return key;
                }
            }
        }
        return command.toString();
    }
};

module.exports = Commands;