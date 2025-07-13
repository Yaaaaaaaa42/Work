package com.yang.springbootbackend.service.impl;

import com.yang.springbootbackend.model.domain.ChatMessage;
import com.yang.springbootbackend.model.dto.chat.ChatRequest;
import com.yang.springbootbackend.model.dto.chat.ChatResponse;
import com.yang.springbootbackend.service.ChatService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

/**
 * 聊天服务实现
 */
@Service
public class ChatServiceImpl implements ChatService {

    /**
     * 表情列表
     */
    private static final List<String> EMOJIS = Arrays.asList("🤔", "😊", "🎉", "💡", "⚠️", "❤️", "🤖");

    /**
     * 回复列表
     */
    private static final List<String> RESPONSES = Arrays.asList(
            "正在认真思考您的问题...",
            "这个建议听起来不错！需要我详细说明吗？",
            "恭喜！操作已成功完成 🎊",
            "发现创新解决方案：建议尝试...",
            "注意：该操作存在风险，请确认！",
            "感谢您的耐心等待！问题已解决 ❤️",
            "我是您的AI助手，请问有什么可以帮您？"
    );

    @Override
    public ChatResponse processMessage(ChatRequest chatRequest) {
        // 保存用户消息（数据库操作）
        // saveUserMessage(chatRequest);

        // 随机选择一个表情和回复
        return generateRandomResponse();
    }

    @Override
    public ChatResponse processSpeech(String transcript) {

        if (transcript == null || transcript.trim().isEmpty()) {
            return new ChatResponse("您好，我没有听清您说的话，请再说一次", "🤔");
        }


        if (transcript.contains("你好") || transcript.contains("早上好") || transcript.contains("晚上好")) {
            return new ChatResponse("您好！很高兴为您服务！", "😊");
        } else if (transcript.contains("谢谢") || transcript.contains("感谢")) {
            return new ChatResponse("不用客气，这是我应该做的！", "❤️");
        } else if (transcript.contains("再见") || transcript.contains("拜拜")) {
            return new ChatResponse("再见！有需要随时找我！", "👋");
        }

        // 如果没有匹配到关键词，返回随机回复
        return generateRandomResponse();
    }

    /**
     * 生成随机回复
     * @return 随机回复
     */
    private ChatResponse generateRandomResponse() {
        Random random = new Random();
        int emojiIndex = random.nextInt(EMOJIS.size());
        int responseIndex = random.nextInt(RESPONSES.size());

        return new ChatResponse(RESPONSES.get(responseIndex), EMOJIS.get(emojiIndex));
    }

    /**
     * 保存用户消息（数据库操作）
     * @param chatRequest 聊天请求
     */
    private void saveUserMessage(ChatRequest chatRequest) {
        ChatMessage userMessage = new ChatMessage();
        userMessage.setUserId(chatRequest.getUserId());
        userMessage.setContent(chatRequest.getContent());
        userMessage.setType(0);
        // userMapper.insert(userMessage);
    }
} 