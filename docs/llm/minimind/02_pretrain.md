## 数据集
预训练的数据格式为：
```
{"text": "如何才能摆脱拖延症？治愈拖延症并不容易，但以下建议可能有所帮助。"} 
{"text": "清晨的阳光透过窗帘洒进房间，桌上的书页被风轻轻翻动。"}
{"text": "Transformer 通过自注意力机制建模上下文关系，是现代大语言模型的重要基础结构。"}
```

需要使用Dataloader将他转为（input, label）格式，其中label与input完全相同
```python
class PretrainDataset(Dataset):

	def __init__(self, data_path, tokenizer, max_length=512):
	
		super().__init__()
		
		self.tokenizer = tokenizer
		
		self.max_length = max_length
		
		self.samples = load_dataset('json', data_files=data_path, split='train')
	
	  
	
	def __len__(self):
	
		return len(self.samples)
	
	  
	
	def __getitem__(self, index):
	
		# 采集一个样本
	
		sample = self.samples[index]
		
		# 对样本进行编码，映射为token id
		
		tokens = self.tokenizer(str(sample['text']), add_special_tokens=False, max_length=self.max_length - 2, truncation=True).input_ids
		
		# 添加特殊token：bos和eos token
		
		tokens = [self.tokenizer.bos_token_id] + tokens + [self.tokenizer.eos_token_id]
		
		# 构建输入序列，先进行padding填充到固定长度，再转换为torch tensor
		
		input_ids = tokens + [self.tokenizer.pad_token_id] * (self.max_length - len(tokens))
		
		input_ids = torch.tensor(input_ids, dtype=torch.long)
		
		# 构建标签序列，输出与输入完全相同
		
		labels = input_ids.clone()
		
		# 屏蔽padding位置，在计算loss时会忽略
		
		labels[input_ids == self.tokenizer.pad_token_id] = -100
		
		return input_ids, labels
```

