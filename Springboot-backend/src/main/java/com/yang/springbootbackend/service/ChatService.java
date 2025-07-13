package com.yang.springbootbackend.service;

import com.yang.springbootbackend.model.dto.chat.ChatRequest;
import com.yang.springbootbackend.model.dto.chat.ChatResponse;

/**
 * 聊天服务接口
 */
public interface ChatService {

    /**
     * 处理用户聊天消息
     * @param chatRequest 聊天请求
     * @return 机器人响应
     */
    ChatResponse processMessage(ChatRequest chatRequest);

    /**
     * 处理语音识别请求
     * @param transcript 语音识别文本
     * @return 机器人响应
     */
    ChatResponse processSpeech(String transcript);
} 