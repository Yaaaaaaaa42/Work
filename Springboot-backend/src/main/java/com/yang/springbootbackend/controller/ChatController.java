package com.yang.springbootbackend.controller;

import com.yang.springbootbackend.common.BaseResponse;
import com.yang.springbootbackend.common.ResultUtils;
import com.yang.springbootbackend.model.dto.chat.ChatRequest;
import com.yang.springbootbackend.model.dto.chat.ChatResponse;
import com.yang.springbootbackend.model.dto.chat.SpeechRequest;
import com.yang.springbootbackend.service.ChatService;
import jakarta.annotation.Resource;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.web.bind.annotation.*;

/**
 * 机器人聊天接口
 */
@RestController
@RequestMapping("/chat")
public class ChatController {

    @Resource
    private ChatService chatService;

    @Resource
    private OpenAiChatModel chatModel;

    /**
     * 发送消息
     * @param chatRequest 聊天请求
     * @return 机器人回复
     */
    @PostMapping("/message")
    public BaseResponse<ChatResponse> sendMessage(@RequestBody ChatRequest chatRequest) {
        ChatResponse chatResponse = chatService.processMessage(chatRequest);
        return ResultUtils.success(chatResponse);
    }

    /**
     * 处理语音识别
     * @param speechRequest 语音识别请求
     * @return 机器人回复
     */
    @PostMapping("/speech")
    public BaseResponse<ChatResponse> processSpeech(@RequestBody SpeechRequest speechRequest) {
        ChatResponse chatResponse = chatService.processSpeech(speechRequest.getTranscript());
        return ResultUtils.success(chatResponse);
    }

    /**
     * 获取初始机器人状态
     * @return 初始状态
     */
    @GetMapping("/init")
    public BaseResponse<ChatResponse> getInitialState() {
        ChatResponse initialState = new ChatResponse("你好！我是您的AI助手，请问有什么可以帮您？", "🤖");
        return ResultUtils.success(initialState);
    }
} 