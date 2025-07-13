package com.yang.springbootbackend.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * 聊天消息实体类
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage implements Serializable {

    /**
     * 消息ID
     */
    private Long id;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 消息内容
     */
    private String content;

    /**
     * 消息类型（0-用户消息，1-机器人消息）
     */
    private Integer type;

    /**
     * 表情符号
     */
    private String emoji;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 是否删除（0-未删除，1-已删除）
     */
    private Integer isDelete;

    private static final long serialVersionUID = 1L;
} 