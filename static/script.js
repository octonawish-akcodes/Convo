$(document).ready(function () {
    var messageHistory = [];
    var currentIndex = -1;
    var chatCount = 1;

    $('#send-button').click(function () {
        var user_input = $('#message-input').val();
        showStatusIndicator();

        var timestamp = new Date().toLocaleTimeString();

        $.ajax({
            type: 'POST',
            url: '/ask',
            data: {
                user_input: user_input
            },
            success: function (response) {
                hideStatusIndicator();

                var userMessage = '<div class="message user-message">' +
                    '<div class="message-name">You</div>' +
                    '<div>' + response.user_input + '</div>' +
                    '</div>';

                var geminiResponse = response.gemini_response;

                var formattedResponse = '<div class="message other-message">' +
                    '<div class="message-name">Gemini</div>' +
                    '<div class="message-content">' +
                    '<div>' + geminiResponse.split('\n').join('</div><div>') + '</div>' +
                    '</div>' +
                    '</div>';

                $('#message-container').append(userMessage);
                $('#message-container').append(formattedResponse);

                messageHistory.push(userMessage);
                messageHistory.push(formattedResponse);

                $('#message-input').val('');
                currentIndex = messageHistory.length - 1;
            },
            error: function (error) {
                console.error('Error:', error);
                hideStatusIndicator();
            }
        });
    });

    $('#new-chat-button').click(function () {
        var randomChatName = 'Chat ' + chatCount++;
        var newChat = {
            name: randomChatName,
            messages: []
        };

        clearChatWindow();
        showChatInWindow(newChat);
    });

    function clearChatWindow() {
        $('#message-container').empty();
    }

    function showChatInWindow(chat) {
        chat.messages.forEach(function (message) {
            $('#message-container').append(message);
        });

        currentIndex = messageHistory.length - 1;
    }

    function showStatusIndicator() {
        var statusIndicator = $('#status-indicator');
        statusIndicator.text('Generating reply...');
        statusIndicator.fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    }

    function hideStatusIndicator() {
        $('#status-indicator').hide();
    }
});
